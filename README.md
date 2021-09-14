<h1 align="center">
    <img alt="to-do" src="public/dashgo-logo.png" />
</h1>

<h4 align="center">
  A stylish responsive static dashboard application build with ChakraUI and Next.js.
</h4>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/joao96/dashgo-chakraUI?style=flat-square">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/joao96/dashgo-chakraUI?style=flat-square">
<!--   <img alt="License" src="https://img.shields.io/github/license/joao96/dashgo-chakraUI?style=flat-square"> -->
</p>

<p align="center">
  <a href="#checkered_flag-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-setup">Setup</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#sparkles-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<!--   <a href="#page_facing_up-license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; -->
  <a href="#get-in-touch-monocle_face">Get in touch</a>
</p>

## :checkered_flag: Technologies

- [Next.Js](https://nextjs.org/)
- [ChakraUI](https://chakra-ui.com/)
- [react-hook-form](https://react-hook-form.com/get-started)
- [Yup](https://github.com/jquense/yup)
- [React Query](https://react-query.tanstack.com/overview)
- [ApexCharts.js](https://apexcharts.com/)
- [Mirage JS](https://miragejs.com/)
- [faker](https://github.com/marak/Faker.js/)
- [Jest](https://jestjs.io/)
- [testing-library](https://testing-library.com/)
- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## :information_source: Setup

In order to run this application, it's required that you have [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

**Step 1:** Clone this repo & run a `cd` into project's folder.

**Step 2:** install node modules as below:

```
npm install
```

if you prefer:

```
yarn
```

**Step 3:**

```
yarn dev
```

Once the server is up, go to http://localhost:3000/ and you should see something like this:

<p align="center">
  <img src="public/dashgo-dashboard.png" alt="Initial page">
</p>

<!-- ## :page_facing_up: License

<a href="https://github.com/joao96/the-simplest-todo/blob/main/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/joao96/the-simplest-todo?style=flat-square">
</a>

<br />

This project is licensed under the MIT. -->

## :sparkles: How To Use

Since this is a static application, there is no authentication logic. In order to navigate from the Login page to the Dashboard page, you need to alter the URL to the following: 

```
http://localhost:3000/dashboard
```
From there, you can use the side bar to navigate to the users page, where you are able to see pages and pages of fake users (thanks to the [Mirage JS](https://miragejs.com/) fake api and [faker](https://github.com/marak/Faker.js/)). Also, it is possible to create new users. Last but not least, pagination logic was added as well for this route.

The other options in the sidebar, *formulários* and *automação*, were not implemented. Moreover, the search bar on the top does nothing as well. As i said, it is a static application made with the intent of practicing with [ChakraUI](https://chakra-ui.com/), [react-hook-form](https://react-hook-form.com/get-started) and [React Query](https://react-query.tanstack.com/overview).

## Get in touch! :monocle_face:

[![Linkedin Badge](https://img.shields.io/badge/-João%20Victor%20Poletti-0e76a8?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jvpoletti/)](https://www.linkedin.com/in/jvpoletti/)
[![Gmail Badge](https://img.shields.io/badge/-jvpoletti@gmail.com-ff512f?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jvpoletti@gmail.com)](mailto:jvpoletti@gmail.com)

<br />

Made with :green_heart: by [João Victor Poletti](https://github.com/joao96)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
