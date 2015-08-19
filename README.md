# probedock-demo-grunt-jasmine-protractor

> Demo of integration with [Probe Dock](https://github.com/probedock/probedock) for Jasmine with [Grunt task](https://github.com/gruntjs/grunt-contrib-jasmine).

## Requirements

* Node 0.12+ (with npm, bower and grunt)

## Setup and usage

1. Clone this repository.

2. Run `npm install` and `bower install`

3. If already registered, skip this step. Do the [registration](http://) on the demo server and create your account. You will receive an email confirmation with a link. 

4. Create the project in your organization on Probe Dock. First, access the projects' page and click on the `Add a new project` button. You can use the name `karma-sandbox` for example for both name and display name. You can leave the description empty for the demo.

5. Once the project is created, you should follow the `Getting started` guide to setup your project. The guide will invite you to setup your main configuration file and the project configuration file. For this project, you must place the file `probedock.yml` in `<projectRootFolder>` folder. 

6. Now, you can run the test via maven with `grunt test`. You will see test results on Probe Dock on the dashboard. You are able to see the result details by clicking on the report line. 

9. Now you can play a bit with the tests. Break some tests and see the results on both interfaces. Play with the `probedock: { ... }` in the tests. You can also read the documentation of [Probe Dock Karma](https://github.com/probedock/probedock-karma) for more details about the probe used to send the test results. You have also several information on the [library](https://github.com/probedock/probedock-grunt) used by the probe. Finally, you will find the list of probes and libraries on this page: [Probe Dock Probes](https://github.com/probedock/probedock-probes).

## Contributing

* [Fork](https://help.github.com/articles/fork-a-repo)
* Create a topic branch - `git checkout -b feature`
* Push to your branch - `git push origin feature`
* Create a [pull request](http://help.github.com/pull-requests/) from your branch

Please add a changelog entry with your name for new features and bug fixes.

## License

**probedock-demo-grunt-jasmine-protractor** is licensed under the [MIT License](http://opensource.org/licenses/MIT).
See [LICENSE.txt](LICENSE.txt) for the full text.
