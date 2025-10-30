# Contributing to Pokedex

Thank you for contributing to this project! Please follow these guidelines to maintain code quality and consistency.

## Commit Message Convention

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification. All commit messages are automatically validated using Husky and commitlint.

### Commit Message Format

Each commit message should follow this structure:

```
<type>(<scope>): <subject>

[optional body]

[optional footer(s)]
```

### Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that don't affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries
- **revert**: Reverts a previous commit
- **ci**: Changes to CI configuration files and scripts
- **build**: Changes that affect the build system or external dependencies

### Scope (Optional)

The scope should be the name of the affected module or feature (e.g., `api`, `pokedex`, `components`, `ui`).

### Subject

The subject contains a succinct description of the change:

- Use the imperative, present tense: "change" not "changed" nor "changes"
- Don't capitalize the first letter
- No period (.) at the end

### Examples

Good commit messages:

```
feat(pokedex): add pokemon detail page
fix(api): handle missing pokemon data gracefully
docs(readme): update setup instructions
style(components): format PokemonCard component
refactor(utils): simplify data fetching logic
test(components): add unit tests for PokemonCard
chore(deps): update next to 16.0.1
perf(list): implement virtual scrolling for pokemon list
```

Bad commit messages (will be rejected):

```
Update files                    ❌ No type specified
Feat: Add feature              ❌ Type should be lowercase
fix(api): Fixed the bug.       ❌ Subject should not end with period
FIX: something                 ❌ Type should be lowercase
feat(API): Add endpoint        ❌ Subject should not start with capital letter
```

### Body (Optional)

The body should include the motivation for the change and contrast this with previous behavior.

### Footer (Optional)

The footer should contain any information about Breaking Changes and reference GitHub issues that this commit closes.

```
feat(api): add pokemon search endpoint

Allow users to search pokemon by name or type

BREAKING CHANGE: The /api/pokemon endpoint now requires authentication
Closes #123
```

## Development Workflow

1. Create a new branch from `main`
2. Make your changes
3. Write clear, descriptive commit messages following the convention above
4. Push your changes
5. Create a pull request

## Need Help?

If you have questions about the commit message format or contribution process, feel free to open an issue or reach out to the maintainers.
