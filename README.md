# JSDayIE 2023: Building Fast, Maintainable JavaScript Monorepos with Nx

This is the code that I showed during my talk at JSDayIE in Dublin in 2023.

## Links

- [Slides](https://pitch.com/public/1d879346-dc78-46ab-8cdc-80dc9bf1cd45)
- [Recording](https://www.youtube.com/watch?v=axcYKMnSI54)

## Talk Description

As any org scales, at some stage you'll find yourself wanting to share code between different projects - wouldn't it be great to resuse that React component we built for the client app in our new admin tool! Or maybe you're working in a microfrontend architecture with dozens or hundreds of independently deployable frontend applications. One way of solving these problems is with a monorepo - but that brings problems in itself around scalability and maintainability... enter Nx! In this talk we'll discuss how Nx can help you to manage a monorepo and the benefits that it brings. We will dive into how it can help you to generate new projects, its smart ability to know what's changed and only rebuild what it absolutely needs to, and how its distributed nature can reduce the time you spend waiting for CICD pipelines to run.
