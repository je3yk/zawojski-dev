I would like to work on my own software factory.

## What is a Software Factory?
A software factory is generally a defined set of tools and processes that takes a request as input and produces a software product as output.

Input --> Software Factory --> Output

The Input may be either an idea written in a prompt, a more detailed description, or an already defined task from some backlog (that may also be defined by some agent).

The Output is an actually implemented piece of software that is part of a bigger software system.

The behavior of a Software Factory can be defined with these steps:
1. (Triage agent) Takes the input, analyzes it, and tries to understand and define the specification for the software to be built, in the context of the whole project/product.
  - If the input prompt is too ambiguous, loop with the human to clarify the specification, in order to avoid implementing completely different software than what the human intended.
2. (Implementation agent) Takes the specification from the triage agent and implements the described piece of software.
3. (Review agent + CI/CD pipeline) Takes the output code from the implementation agent and reviews it for correctness and completeness. In case of any issues (severity level may differ depending on the project), they are looped back to the implementation agent.
4. (Verification agent) Takes the full software along with the implemented changes, and tries to execute it in a sandbox environment, so that it is actually tested end-to-end within the whole system. Same as with the Review agent, in case of any issues, they are looped back to the implementation agent.
5. (Deployment agent) Takes the full software along with the implemented changes, and deploys it to the production environment. It is good to introduce this element with feature-flag rollout, so that the deployment can be tested in the production environment before it is rolled out to all users.
6. (Monitoring) This can be done either by an agent, or by some external monitoring system. The goal here is to monitor the added changes, gather metrics, user feedback, and other relevant data to ensure the software is working as expected. For any findings, new tasks can be created that go back to the software factory backlog.

The `Triage agent` works on the connection between the `Input` (Backlog/Prompt) and the `Software Factory`. The `Implementation agent`, `Review agent`, and `Verification agent` work with each-other in coordinated loop inside the `Software Factory`. The `Deployment agent` works on the connection between the `Software Factory` and the `Output` (Software), and the `Monitoring agent` basically works on the `Output` (Software) with optional connection to the `Input` (Backlog/Prompt).

## Implementation (Iteration 1)
In this iteration, we should focus on defining a very basic setup that can fulfill the needs of the software factory. For each element of the software factory, we should define a basic setup that can be used in the next iterations.

## Goal
Define a few user stories that we want to implement, which will help us define a first fully functional software factory.

Split by pipeline stage rather than as one end-to-end epic, so each story is independently buildable and testable.

| ID | Description |
|----|-------------|
| 1 | As a developer, I want to submit an idea and get back a structured spec, so I can confirm scope before any code is written |
| 2 | As a developer, when my idea is ambiguous, I want the triage agent to ask me clarifying questions rather than guess |
| 3 | As a developer, I want an approved spec turned into a PR on a dedicated branch, so I don't write the boilerplate myself |
| 4 | As a developer, I want CI and automated review to run on every factory-opened PR, with failures looped back to the implementation agent automatically |
| 5 | As a developer, I want the change verified end-to-end in a sandbox/preview once review passes, so I know it works in context, not just that it compiles |
| 6 | As a developer, I want a risk-estimated report before anything deploys, so I can approve it or let it auto-deploy on low risk |
| 7 | As a developer, when the implementation agent finds the spec infeasible mid-build, I want it rejected back to the triage agent for revision, rather than silently deviated from |

Architecture/codebase alignment (previously its own story) is not independently testable on its own — folded in as an acceptance criterion on stories 1 and 3: the triage agent must be aware of existing primitives when producing the spec, and the implementation agent must introduce as few new elements as possible when building it.

### Input
In the first iteration, the input may be just from the user prompting the idea.

**Decision:** Use a GitHub issue as the storage location for the input, with the issue body holding the original, unedited prompt/idea.

### Triage agent
> Question 1: How to define a specific agent, that focus only on the triage part? Is it just some kind of skill that can be somehow executed?

**Decision:** Split triage and implementation into two separate agents, by capability rather than by prompt alone. The triage agent gets read-only access to the codebase/docs, and write access only to the spec artifact it produces. The implementation agent gets full write access to the codebase, but no authority to redefine the spec. If the implementation agent finds the spec infeasible mid-build, it rejects the spec back to the triage agent for revision, rather than deviating from it unilaterally.

**Decision:** The spec is posted as a specifically marked comment on the input issue (e.g. `## Spec vN`), so the implementation agent knows exactly where to look for its instructions rather than guessing from the general discussion thread. Later comments (clarification Q&A, spec revisions) are added to the same thread; a revised spec is a new marked comment, not an edit to the old one.

* The role of the triage agent is to take the input, try to understand what is requested, and determine how it can be placed in the codebase.
* It may also be an initial step that needs to define a totally new software architecture and primitives.
* It should be aware of existing primitives in the codebase, and analyze the spec from the perspective that introduces as few new elements as possible. A primitive may be an existing layer, interface, or utility function, but it also refers to basic development conventions that are important for the whole implementation, where any change would require re-testing the whole codebase (or at least a big part of it).


### Implementation agent
> Same question as in the triage agent

**Decision:** Resolved by the triage agent's decision above — full codebase write access, but the spec can only be rejected back to triage, never edited directly.

* The implementation agent should basically take the triage specification output and implement it in the codebase.
* Once implemented, it provides the changes for the Reviewer and Verifier agents. In first iteration, it may be just a Git pull request.
* The implementation agent should always commit changes in the designated branch, and not in the main branch.


### Reviewer agent
* In the first iteration we can use CodeRabbit to review the changes provided by the implementation agent.
* Also, when the implemented changes are pushed into a pull request, the CI/CD pipelines (lint/types/unit tests) should run automatically.

### Verifier agent
> Question 2: How we can actually implement this agent? Should it be just a sub-agent or local machine, or would it be better to use some external service to run the sandbox and execute the verification agent?

**Decision:** Gate it strictly behind the Reviewer agent, don't run it in parallel. Fast checks (CI lint/types/unit tests + CodeRabbit) run first; if either raises issues above the severity threshold, loop back to the implementation agent and skip verification, since review changing the code would make any concurrent end-to-end run against the old code moot. Only once review is clean does the verifier agent run, targeting a preview/sandbox environment. The deployment agent waits on the verifier's pass, not just the reviewer's.

* This agent basically needs to run the application in some kind of a sandbox environment, and execute the verifications against the spec, and the whole application.
* Maybe some preview environment to which the agent can connect and check the changes (?)

### Deployment agent
* The final goal here would be to have an agent that prepares a report of the implemented changes, estimates the risk of deploying the changes, and either deploys the changes itself (if the risk is low) or waits for manual approval (if the risk is high).
* In the first iteration, its job may be to just prepare a report of the implemented changes with an initial risk estimation that can be judged by the human operator.

### Monitoring agent
* In the first iteration, we can skip this part. The dev/user will basically observe the application and try to identify what are the next steps to take.


## Status
This is the proposal for the first iteration of the software factory. We can now try to implement that in a real environment, to test it and see where it needs to be improved.
It looks hard to define one software factory that would be applicable to all projects, but once we have the first one implemented, we may try to find elements that may be taken out to some boilerplate that could be then used as a template for future projects.
