const feedbackMouseLeave = () => {
  document.querySelectorAll('.helperIcon').forEach((el) => {
    el.classList.remove('helperIcon_active');
    el.childNodes.forEach((el) => {
      el.classList.remove('fab_active');
    });
  });
};

const feedbackMouseEnter = () => {
  document.querySelectorAll('.helperIcon').forEach((el) => {
    el.classList.add('helperIcon_active');
    el.childNodes.forEach((el) => {
      el.classList.add('fab_active');
    });
  });
};

const showScrollTopArrow = () => {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      document.querySelectorAll('footer .fas').forEach((el) => {
        el.classList.add('fas_active');
      });
    } else {
      document.querySelectorAll('footer .fas').forEach((el) => {
        el.classList.remove('fas_active');
      });
    }
  });
};

const headerFixMenu = () => {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
      document.querySelector('.header__main').classList.add('header_active');
    } else {
      document.querySelector('.header__main').classList.remove('header_active');
    }
  });
};

const scrollToElem = (elem) => {
  document.querySelector(`.${elem}`).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const redirectToLink = (link) => {
  window.open(link);
};

const workWithUserApi = (event, func, selector) => {
  event.preventDefault();
  let data = {};
  const inputs = document.querySelectorAll(`${selector} .form-control`);
  inputs.forEach((el) => {
    data[el.name] = el.value;
  });
  func(data);
  inputs.forEach((el) => {
    el.value = '';
  });
};

export { feedbackMouseLeave, feedbackMouseEnter, showScrollTopArrow, headerFixMenu, scrollToElem, redirectToLink, workWithUserApi };
