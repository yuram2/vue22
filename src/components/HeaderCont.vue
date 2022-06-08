<template>
  <header id="header">
    <div className="header__port">
      <router-link to="/port">portfoilo</router-link>
    </div>
    <div className="header__logo">
      <router-link to="/">YURAM VUE SITE</router-link>
    </div>
    <nav className="header__menu">
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/refer">Refer</router-link></li>
        <li><router-link to="/youtube">Youtube</router-link></li>
        <li><router-link to="/movie">Movie</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>
<style lang="scss">
#header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  color: var(--white);
  border-bottom: 1px solid var(--dark_border);
  background-color: var(--dark_bg);
  display: flex;
  align-items: center;
  font-family: "Rajdhani";
}
.header__port {
  flex: 1 1 40%;

  a {
    display: inline-block;
    padding: 1rem;
    text-transform: capitalize;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 1rem;
      bottom: 1rem;
      width: calc(100% - 2rem);
      height: 1px;
      background: var(--white);
      transform: scaleX(0);
      transition: all 0.3s ease;
    }
    &:hover::before {
      transform: scaleX(1);
    }
  }
}
.header__logo {
  flex: 1 1 20%;
  text-align: center;

  a {
    display: inline-block;
    font-size: 1.6rem;
    padding: 1rem;
  }
}
.header__menu {
  flex: 1 1 40%;
  text-align: right;

  li {
    display: inline;

    a {
      display: inline-block;
      padding: 1rem;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: 1rem;
        bottom: 1rem;
        width: calc(100% - 2rem);
        height: 1px;
        background: var(--white);
        transform: scaleX(0);
        transition: all 0.3s ease;
      }
      &:hover::before {
        transform: scaleX(1);
      }
    }
  }
}

// 라이트 버전
#header.light {
  background-color: var(--light_bg);
  border-color: var(--light_border);

  a {
    color: var(--black);

    &::before {
      background: var(--black);
    }
  }
}

// 미디어 쿼리
@media (max-width: 1000px) {
  .header__menu {
    display: none;
  }
  .header__port {
    display: none;
  }
}

@media (max-width: 600px) {
  #header {
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(40px);
  }
}
</style>
