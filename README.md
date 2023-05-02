# Allgit

### Allgit serves raw files from Github, Gitlab, and Bitbucket, but with the proper Content-Type headers.
**NOTE:** Allgit will not send proper Content-Type headers for HTML files, unless your repository is specifically approved.

## Usage

For Github:

```lua
https://rawgit.pp.ua/gh/user/repo@branch/file_path_here
-- Get a file from a branch

https://rawgit.pp.ua/gh/user/repo/file_path_here
-- Get a file from the main branch
```

For Gitlab:

```lua
https://rawgit.pp.ua/gl/user/repo@branch/file_path_here
-- Get a file from a branch

https://rawgit.pp.ua/gl/user/repo/file_path_here
-- Get a file from the main branch
```

**NOT ADDED YET, PLEASE WAIT AS WE ADD IT TO ALLGIT!** for Bitbucket:

```lua
https://rawgit.pp.ua/bb/user/repo/commit_sha_or_head/file_path_here
-- Get a file
```

## Approved Repositories

This is a list of approved repositories for HTML headers on Github and Gitlab.

- **Github:** 3hk0/3hk0-Assets

## Deploying
comign soon