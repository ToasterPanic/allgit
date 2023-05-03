# Allgit

### Allgit serves raw files from Github and Gitlab, but with the proper Content-Type headers.
**NOTE:** Allgit will not send proper Content-Type headers for HTML files, unless your repository is specifically approved.

## Usage

For Github:

```lua
https://allgit.rk1.us/gh/user/repo@branch/file_path_here
-- Get a file from a branch
```

For Gitlab:

```lua
https://allgit.rk1.us/gl/user/repo@branch/file_path_here
-- Get a file from a branch
```

## Deploying
`npm install`, then `npm start`. Simple.