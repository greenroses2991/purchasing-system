<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-xxl">
    <a class="navbar-brand" href="#">CLIMBS - PURCHASING SYSTEM</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-main" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class=" collapse navbar-collapse justify-content-end" id="nav-main">
      <!-- <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll justify-content-end" style="--bs-scroll-height: 100px;"> -->
        <ul class="nav justify-content-end">
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">PRODUCT</a>
    <ul class="dropdown-menu">
      <!-- <li><a class="dropdown-item" href="#">BRAND</a></li> -->
      <li><RouterLink class="dropdown-item" :to="{ name: 'product.brand' }">BRAND</RouterLink></li>
      <!-- <li><a class="dropdown-item" href="#">UNIT</a></li> -->
       <li><RouterLink class="dropdown-item" :to="{ name: 'product.unit' }">UNIT</RouterLink></li>
       <li><RouterLink class="dropdown-item" :to="{ name: 'productprof.addprod' }">PRODUCT PROFILE</RouterLink></li>
    </ul>
  </li>
    <li class="navitem ms-2 d-done d-md-Inline">
      <RouterLink class="dropdown-item px-2 py-2" :to="{ name: 'supplier.suppliers' }">SUPPLIERS</RouterLink>
      <!-- <a class="nav-link" href="#supplier">SUPPLIERS</a> -->
    </li>
     <li class="navitem ms-2 d-done d-md-Inline">
      <a class="btn btn-secondary" href="#prices">PRICE</a>
    </li>
      </ul>
      <!-- <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>
  </div>
</nav>
</template>
