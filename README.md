# link-redirect

A very simple project for link redirection.

## Why?

Sometimes, even the smallest and nichest problems can be meaningful enough to have their own project. This time it is about (at least) Android phones and desktop shortucts of a website. When creating a website shortcut to desktop or home screen using for example Chrome or Firefox, they are sometimes opening to a browser or sometimes opening as a PWA. The latter is something I personally don't want, I just want them to open to the browser normally.

I haven't yet figured out any way to prevent the shortcut to open as a PWA. One solution that came to my mind was to create a shortcut to an another website that does the redirection to the actual website. Also: to add the shortcut for the website that does the redirection, the shortcut has to be created before the redirection happens. That is something this project handles, too.

## Start the project

Choose some place to host this project and:

1. Create `.env` file by copying `.env.template` and add values
2. Start the whole docker compose project or only the database if you want to run the node project locally with `npm start`

## Usage

This project doesn't have (yet) any admin tool to manage links, so links must be added and updated manually and directly to the database. 

1. Insert a link to the database with name and optionally favicon
    - Favicon can be full url or relative path to `public` directory
    - The `public` directory has a default favicon for links without one
    - The default favicon can be removed by, well, actually removing the file or renaming it to something else that browsers don't recognize (it is used even if not specified in the head section)
2. Go to the URL wherever this project is hosted and `/{link-name}`, for example https://example.com/my-new-link
3. Create a shortcut to your home screen
4. Update your link in the database to have an URL where to redirect
5. Now your home screen shortcut opens up in the browser and opens the desired website!