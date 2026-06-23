class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
      body {
        background-color: #ffffff; /* Forces a crisp white background */
        margin: 0;
        padding: 0;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid #e1e4e8;
          max-width: 900px;
          margin: 0px auto 20px auto;
        }
        .brand {
          font-size: 24px;
          font-weight: 600;
          color: #24292f;
          text-decoration: none;
        }
        .navbar-right {
          display: flex;
          gap: 24px;
        }
        .navbar-right a {
          text-decoration: none;
          color: #0969da;
        }
        .navbar-right a:hover {
          text-decoration: underline;
        }
        .content {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
        }
      </style>

      <nav class="navbar">
        <div class="navbar-left">
          <a class="brand" href="./index.html">CodeFormatter</a>
        </div>
        <div class="navbar-right">
          <a href="./privacy-policy.html">Privacy Policy</a>
          <a href="./terms-of-service.html">Terms of Service</a>
          <a href="./support.html">Support</a>
        </div>
      </nav>
    `;
  }
}
customElements.define('nav-bar', NavBar);
