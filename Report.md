# TRP1 – MCP Setup Challenge

## Task 3: Documentation Report

### 1. What I Did

I successfully connected my IDE to the Tenx MCP server and verified that the MCP connection was active throughout the assessment.

I then created and updated the AI agent rules file based on best practices inspired by Boris Cherny’s workflow and broader community guidance.

The rules focused on:

- Planning before coding
- Asking clarifying questions
- Preferring simple and readable solutions
- Avoiding assumptions
- Explaining reasoning and trade-offs

After updating the rules, I tested the AI agent's behavior using the MCP-connected coding agent.

### 2. What Worked

The updated rules significantly improved the agent’s behavior:

- When prompted with **“Write a function that validates an address”**, the agent:
    - Started by proposing a clear plan before writing code
    - Asked clarifying questions about requirements
    - Preferred simple and understandable solutions
    - Suggested writing tests and discussed test coverage
    - Mentioned CI/CD pipeline considerations for validation and quality assurance

The agent’s responses were more structured, thoughtful, and aligned with real-world engineering practices.

### 3. What Didn’t Work / Challenges Faced

- Initially, without clear rules, the agent tended to jump directly into implementation and made assumptions about requirements.
- Some prompts required minor rule adjustments to further encourage clarification before execution.

These issues were resolved by refining the rules to emphasize planning-first behavior and explicit clarification.

### 4. Insights Gained

This exercise demonstrated that:

- A well-defined rules file strongly influences an AI agent's behavior
- Planning-first instructions lead to higher-quality and more predictable outputs
- Treating the rules file as a **living document**, updated when issues are observed, aligns well with Boris Cherny’s recommended workflow
- Clear guidance reduces hallucination, improves reasoning, and makes the AI agent feel more like a reliable engineering collaborator

Overall, the MCP setup combined with thoughtfully designed rules resulted in a more effective and controllable AI coding assistant.
