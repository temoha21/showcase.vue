<template>
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#"><img src="../../assets/img/50x50.png" alt=""></a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                    <router-link exact-active-class="active" tag="li" :to="{ name: 'Home' }"><a>Home</a></router-link>
                    <router-link exact-active-class="active" tag="li" :to="{ name: 'ShowCase'}"><a>Products</a></router-link>
                    <li><a href="#">Deals</a></li>
                    <li><a href="#">Stores</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><span class="glyphicon glyphicon-user"></span> Your Account</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-shopping-cart"></span> Cart</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
  export default {
    name: 'headerMenu',
    data () {
      return {}
    }
  }
</script>