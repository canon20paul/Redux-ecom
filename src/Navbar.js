import React from 'react'


export default function Navbar() {
  return (
    <div>
          {/* <h1>This is Component Navbar</h1> */}

    <nav class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/additem">Add Item</a>
      </li>
              </ul>

              <ul className="navbar-nav mr-auto">
                    <li className='nav-item'>
                        <a href="/cart" className='nav-link'>Cart</a>
                    </li>
              </ul>
  </div>
</nav>

      </div>

  )
}
