<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-4" v-for="product in products">
                <div class="panel panel-primary">
                    <div class="panel-heading">BLACK FRIDAY DEAL</div>
                    <div class="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image"></div>
                    <div class="panel-footer">Buy 50 mobiles and get a gift card</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
      name: 'ShowCase',
      data () {
        return {
          products: [1, 2, 3, 4, 5, 6]
        }
      }
    }
</script>