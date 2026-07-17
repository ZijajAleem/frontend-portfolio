# WORKFLOW

## Feature
Simple Contact Form with Client-Side Validation
## Round 1 – Vague Prompt

For the first attempt, I used a very simple prompt with almost no instructions:

**Prompt:**
"Create a contact form with validation."

### Result

The AI generated a working contact form, but it did not fully match what I wanted. The design and validation worked, but there were no detailed requirements, no accessibility considerations, no explanation of the code, and no verification of whether all requirements had been met. I had to spend extra time reviewing the code and checking if anything was missing.
## Round 2 – Precise Prompt

For the second attempt, I started a new chat and wrote a detailed prompt with clear requirements. I included the files to modify (index.html, style.css, and script.js), required semantic HTML, responsive CSS, accessibility features, inline validation messages, beginner-friendly JavaScript, comments, edge-case handling, and a verification checklist.

### Result

The generated code matched my requirements much better. The form used semantic HTML, displayed clear validation messages, included accessibility improvements such as labels and focus styles, and worked on both desktop and mobile screens. The AI also explained how the validation worked, reviewed its own solution, and checked that all requirements had been satisfied. Although writing the prompt took longer, I spent less time reviewing and correcting the generated code.
## Comparison

The vague prompt produced a basic working form, but I needed to spend more time checking whether it met the assignment requirements. It did not include accessibility improvements, explanations, or a verification step.

The precise prompt produced a much better result because it included clear specifications and constraints. The code was more organized, easier to understand, and included accessibility features such as labels, focus styles, and inline error messages. It also considered edge cases like empty fields, invalid email formats, and whitespace-only input.

Although writing the detailed prompt took more time, it reduced the amount of review and debugging needed afterward. Overall, the second workflow was faster and produced higher-quality code.
## AI Mistake I Caught

One mistake I caught during the review was that the generated code only simulated a successful form submission. It did not actually send the message to a backend or email service. The AI clearly mentioned this limitation, but I still had to review the code to make sure it matched the assignment requirements. This reminded me that AI-generated code should always be tested and reviewed instead of being accepted without checking.## Conclusion

This exercise showed me the difference between using a vague prompt and a well-engineered prompt. The vague prompt produced usable code, but it required much more review and checking. The detailed prompt produced code that was more accurate, accessible, easier to understand, and closer to the assignment requirements. I learned that spending extra time writing a clear specification saves time during testing and debugging. In future projects, I will use detailed prompts with clear requirements, constraints, verification steps, and review instructions instead of relying on short prompts.