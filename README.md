<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<div align='center'>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
</div>


<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">:thumbsup:js-racingcar</h3>

  <p align="center">
    javascript로 만든 간단한 자동차 경주 게임
    <br />
    <br />
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project




javascript를 이용해 만들어 본 간단한 레이싱 게임.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* HTML
* CSS
* Vanilla javascript
* Cypress
* ESLint
* Prettier

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
1. npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Repo를 clone한다
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. NPM pakage들을 설치한다
   ```sh
   npm install
   ```
3. CORS 해결을 위해 http-server 등을 이용해 프로젝트를 실행한다
   ```sh
   npm install http-server
   http-server
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] 게임에 참여할 자동차들의 이름을 입력한다. 
  - [x] 자동차 이름은 쉼표(,)로 구분되며, 5자 이하만 가능하다. 
  - [x] 중복되는 이름은 사용할 수 없다. 
  - [x] 최소 2개 이상의 이름을 입력해야 한다.
- [x] 올바른 이름을 입력하면 시도 횟수를 입력할 수 있다. 
  - [x] 2 이상, 20 이하의 정수만 입력할 수 있다. 
- [x] 올바른 시도 횟수가 입력되면 게임이 진행된다
  - [x] 각각의 자동차들은 각 시도마다 60% 확률로 전진한다. 
  - [x] 각 시도는 1초의 대기시간을 두고 진행된다.
- [x] 모든 시도 횟수가 소모되면 2초 뒤 우승한 자동차들의 이름이 출력된다.
  - [x] 가장 많이 전진한 자동차들이 우승한다. 
  - [x] 우승자는 하나 이상일 수 있으며, 콤마로 구분하여 출력한다.
- [x] 다시하기 버튼을 누르면 게임을 처음부터 다시 시작한다. 

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
