# TRP1 – MCP Setup Challenge Submission

This repository contains my submission for the **TRP1 MCP Setup Challenge**.
The challenge focused on configuring an MCP-enabled coding environment, improving AI agent behavior through rules, and documenting learnings from testing and iteration.

---

## Overview

The challenge evaluated:

* Ability to follow technical instructions
* Curiosity and openness to AI-assisted development
* Clear communication and documentation
* Iterative improvement based on observation and testing

---

## MCP Setup

* **MCP Server:** Tenx MCP Server
* **Status:** Successfully connected and active throughout testing
* **IDE Used:** *Vs Code*

The MCP connection was verified and used to log interactions with the AI coding agent during testing.

---

## Rules Configuration (Task 2)

The AI coding agent was configured using a rules file to guide its behavior and improve effectiveness.

**Rules file location:**

* **VS Code:** `.github/copilot-instructions.md`

### Design Principles

Rules were inspired by:

* Boris Cherny’s workflow and guidance
* Community best practices for AI agent control

Key principles applied:

* Plan before executing
* Ask clarifying questions
* Prefer simple and readable solutions
* Avoid assumptions or guessing
* Explain reasoning and trade-offs
* Treat the rules file as a living document

---

## Agent Testing

To validate the effectiveness of the rules, the agent was tested with practical prompts.

**Example test prompt:**

```text
Write a function that validates an address.
```

**Observed Behavior:**

With the rules applied, the agent:

* Proposed a clear plan before writing code
* Asked clarifying questions about requirements
* Preferred simple and understandable solutions
* Suggested writing tests and considering test coverage
* Mentioned CI/CD pipeline considerations

These observations confirmed that the rules successfully influenced agent behavior.

---

## Documentation

Detailed documentation of the process, observations, challenges, and insights can be found in:

* `REPORT.md` *(or Task 3 documentation file)*

This includes:

* What was done
* What worked
* What didn’t work
* Insights gained from testing and iteration

---

## Key Learnings

* Clear rules significantly improve AI agent reliability and usefulness
* Planning-first workflows reduce rework and assumptions
* Iterative refinement of rules leads to better alignment with developer intent
* AI agents perform best when treated as collaborators guided by explicit expectations

---

## Submission Notes

* MCP connection remained active during testing
* All configuration and documentation artifacts are included in this repository
* Focus was on clarity, experimentation, and learning rather than complexity
