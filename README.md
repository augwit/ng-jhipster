
ng-hipster for angular 13 - 15

---

[![Logo][jhipster-image]][jhipster-url]

Greetings, Java Hipster!

This is the JHipster Angular 2+ utilities library

[![NPM version][npm-image]][npm-url]
[![Azure DevOps Build Status][azure-devops-image]][azure-devops-url-main]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]

This library is used by the code generated by the generator-jhipster: https://github.com/jhipster/generator-jhipster/. When releasing a new version of the generator-jhipster then this is tested with the specific version of the ng-jhipster referenced in the generated package.json file. If your application is generated by the older version of the generator-jhipster and you manually update ng-jhipster version in the package.json then this may and may not work. To use a newer version of the ng-jhipster, regenerate application with a newer version of the generator-jhipster which generates a right ng-jhipster version into package.json file.

Full documentation and information is available on our website at [https://jhipster.tech/][jhipster-url]

Please read our [guidelines](https://github.com/jhipster/generator-jhipster/blob/main/CONTRIBUTING.md#-submission-guidelines) before submitting an issue. If your issue is a bug, please use the bug template pre populated [here](https://github.com/jhipster/generator-jhipster/issues/new). For feature requests and queries you can use [this template][feature-template].

[jhipster-image]: https://raw.githubusercontent.com/jhipster/jhipster.github.io/main/images/logo/logo-jhipster2x.png
[jhipster-url]: https://jhipster.tech/
[npm-image]: https://badge.fury.io/js/ng-jhipster.svg
[npm-url]: https://npmjs.org/package/ng-jhipster
[azure-devops-image]: https://dev.azure.com/jhipster/ng-jhipster/_apis/build/status/jhipster.ng-jhipster?branchName=main
[azure-devops-url-main]: https://dev.azure.com/jhipster/ng-jhipster/_build
[travis-image]: https://travis-ci.org/jhipster/ng-jhipster.svg?branch=main
[travis-url]: https://travis-ci.org/jhipster/ng-jhipster
[daviddm-image]: https://david-dm.org/jhipster/ng-jhipster.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jhipster/ng-jhipster
[feature-template]: https://github.com/jhipster/generator-jhipster/issues/new?body=*%20**Overview%20of%20the%20request**%0A%0A%3C!--%20what%20is%20the%20query%20or%20request%20--%3E%0A%0A*%20**Motivation%20for%20or%20Use%20Case**%20%0A%0A%3C!--%20explain%20why%20this%20is%20a%20required%20for%20you%20--%3E%0A%0A%0A*%20**Browsers%20and%20Operating%20System**%20%0A%0A%3C!--%20is%20this%20a%20problem%20with%20all%20browsers%20or%20only%20IE8%3F%20--%3E%0A%0A%0A*%20**Related%20issues**%20%0A%0A%3C!--%20has%20a%20similar%20issue%20been%20reported%20before%3F%20--%3E%0A%0A*%20**Suggest%20a%20Fix**%20%0A%0A%3C!--%20if%20you%20can%27t%20fix%20this%20yourself%2C%20perhaps%20you%20can%20point%20to%20what%20might%20be%0A%20%20causing%20the%20problem%20(line%20of%20code%20or%20commit)%20--%3E

## Development setup

You need NodeJS and NPM.

### Fork the ng-jhipster project

Go to the [ng-jhipster project](https://github.com/jhipster/ng-jhipster) and click on the "fork" button. You can then clone your own fork of the project, and start working on it.

[Please read the Github forking documentation for more information](https://help.github.com/articles/fork-a-repo)

### Build

Run `npm install` to install all dependencies.

Make some changes, run `npm run test` to run both eslint/tslint and unit tests.

Build the library with `npm run build`.

Package the library by running `npm pack` in the `dist` directory. This will create an archive `ng-jhipster-vX.Y.Z.tgz`.

For testing, you will want to integrate this archive into an application generated by JHipster.

Go to your generated JHipster application and run...

    npm install path/to/ng-jhipster/dist/ng-jhipster-vX.Y.Z.tgz

...so that your JHipster application uses the content of this archive as `ng-jhipster` dependency which is located in `node_modules/ng-jhipster`.

### Quick development

You can quickly test library changes in Angular application generated by JHipster in the following manner.

1. Generate Angular application using JHipster generator.

2. Actions in the `ng-jhipster` project.

    - In the `ng-package.dev.json` change the value of the `dest` to some subfolder inside generated project, for example if using **Gradle** or **skipping server** then you can use `GeneratedAppRootFolder/build/dist/ng-jhipster` and if using **Maven** then use `target` subfolder instead of `build`.  
       For example, if the generated app and the `ng-jhipster` are siblings in the disk then you can use:

        ```
        "dest": "../generated-app-root-folder-name/build/dist/ng-jhipster",
        ```

        One note about this change. As Angular framework architecture excpects that in building app all blocks of the application are inside app root folder then you can't skip this step. If you don't do this change and in the generated app `tsconfig.json` file refer to `ng-jhipster` default destination folder like this `"ng-jhipster": ["../ng-jhipster/dist"]` then runtime errors will occur on running app.

    - Run `npm run build:dev`

3. Actions in the generated application.

    - In the `tsconfig.json` file, add the following entry into `compilerOptions.paths`:

        ```
        "ng-jhipster": ["build/dist/ng-jhipster"]
        ```

    - Optional step. If you are using some other subfolder than `build` or `target` for `ng-jhipster` build destination and this folder is not in `.eslintignore` then add this folder there (this suppresses ESLint errors for compiled `ng-jhipster` bundle)

    - Run `npm start`

Now on every change in `ng-jhipster` the following will happen automatically:

-   `ng-jhipster` rebuilds
-   generated app rebuilds using freshly built local `ng-jhipster`
-   generated app is reloaded in the browser and you can see and test changes made in the `ng-jhipster`
