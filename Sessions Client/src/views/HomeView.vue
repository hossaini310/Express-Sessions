<template>
  <div class="container d-flex flex-column min-vh-100">
    <h1 class="text-center mt-3">Home</h1>
    <div class="d-flex flex-column">
      <div class="mx-auto">
        <router-link to="/account">Account</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/register">Register</router-link>
      </div>
      <p class="mt-3 mb-5 text-center">Please login to use our services!</p>

      <div class="row">
        <div class="col-4">
          <img class="img-fluid" src="/images/ceo.jpg" />
        </div>
        <div class="col-8 d-flex flex-column justify-content-center">
          <h4 class="mt-4 mb-3">Dear Customer!</h4>
          <p>
            <span class="fw-bold">PlanationX</span> is an innovative International Seed Company,
            active in Plant Breeding, in Seed Production, in Seed Processing; and in Marketing and
            Sales of hybrid vegetable varieties for the professional sectors. PlanationX is an
            industry leader in Research and Development of new, improved vegetable varieties.
          </p>
          <p>
            The Company’s strategic focus is to develop hybrids with novel traits that have a high
            added- value and that meet the present and future demands of our customers. Over the
            last fifteen years, we have marketed the seeds of our Cucurbit varieties worldwide and
            we maintain the highest standards of genetic quality, integrity and professionalism.
            Research is the heart of PlanationX and its future.
          </p>
        </div>
      </div>
    </div>

    <p class="mt-auto text-center">&copy; 2022 Robert Baumgartner</p>
  </div>
</template>

<script setup></script>

<style>
a {
  text-decoration: none !important;
}
</style>
