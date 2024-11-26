# Astro Starter

A basic starter template for Astro projects with:

- TypeScript
- Tailwind CSS
- Prettier
- ESLint
- Husky

## Dependencies

- [Node](https://nodejs.org/) version 20.18.0 or later recommended
- [pnpm](https://pnpm.io/) version 9.12.1 or later recommended
- [git](https://git-scm.com/)

[Volta](https://volta.sh/) is recommended for managing Node versions. The
recommended versions of Node and PNPm are
[pinned](https://docs.volta.sh/reference/pin) with Volta in this templates
`package.json` file.

## Setting Up a New Project

1. Download the project using degit with `pnpm dlx degit RickyAtkinson/astro-starter-template <NEW_PROJECT_NAME>`.
1. Install the project dependencies with `pnpm install`.
1. Initialize git with `git init` and create your first commit with `git add * && git commit -m "Initial commit"`.
1. You can now begin developing your project with `pnpm run dev`.

## Development Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## Website Config

Configuration for the website is stored in `./src/config.ts`. Below are descriptions for the default website config
fields:

| Name             | Required? | Description                                                                                               |
| :--------------- | :-------- | :-------------------------------------------------------------------------------------------------------- |
| siteURL          | Yes       | The URL of this website, e.g. "`https://google.com/`"                                                     |
| siteName         | Yes       | The name of this website, e.g. "Google Search"                                                            |
| title            | Yes       | The default title for the title bar and metadata                                                          |
| titleSuffix      | No        | If set, this is displayed in the title bar on all pages after the main title separated by " \| "          |
| description      | Yes       | A short description of your site used for metadata                                                        |
| tags             | Yes       | A string array of tags/keywords used for metadata                                                         |
| htmlLang         | Yes       | ISO language code for the site used for the `<html>` tag `lang` attribute                                 |
| locale           | Yes       | BCP language code for the website locale                                                                  |
| alternateLocales | Yes       | A string array of alternate BCP language codes for alternate locales                                      |
| author           | Yes       | An object containing data about the author of the website to be used pages that aren't articles           |
| publisher        | Yes       | An object containing data about the website to be used as the publisher metadata on article pages         |
| ogImage          | Yes       | An object containing data about the default Open Graph social image                                       |
| twitterImage     | No        | An object containing data about the default Twitter(X) social image, ogImage will be used if not supplied |
| socialMedia      | Yes       | An object containing details for each of the websites social media platforms                              |

The `./src/config.ts` file also contains the `mainNavMenuLinks` array. This array allows you to configure the links for
the main navbar.
