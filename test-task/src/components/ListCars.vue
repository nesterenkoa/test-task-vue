<template>
<div class="wrapper">
    <h2>Расписание заказов</h2>
        <div class="list-header flex">
            <p>Image</p>
            <p>Data</p>
            <p>Model</p>
            <p>Price</p>
        </div>

        <div class="list-cars">
        <a href="#" v-for="car in cars" :key="car.id" class="item-car flex">
                <img :src="car.image" :alt="car.title" class="image">

            <div class="mobile flex">
                <div class="car-info date">
                    <p class="startDate"> c {{car.startDate}}</p>
                    <p class="finalDate"> по {{car.finalDate}}</p>
                </div>

                <div class="car-description">
                    <p class="model">{{car.model}}</p>
                    <p class="description">{{car.description}}</p>
                </div>

                <div class="car-info car-order">
                    <p class="price">${{car.price}}</p>
                    <button class="btn-order">Арендовать</button>
                </div>
            </div>
        </a>
       </div>

</div>

</template>

<script>
  // import Cars  from './data/cars.js';

  export default {
    name: "ListCars",
    props:[ 'cars' ]
  }
</script>

<style scoped>
.flex{
    display: flex;
}
h2{
    color: #3D5973;
    text-align: center;
}

.wrapper{
    width: 80%;
    margin: 0 auto;
}

.list-header{
    justify-content: space-between;
    background: #68B2FF;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
}
.list-header p{
    width: 20%;
    color: white;
    padding: 10px;
    margin: 0;
    text-align: center;
}
.list-cars{
  justify-content: space-between;
  border-radius: 15px;
}

.item-car{
    box-sizing: border-box;
    text-decoration: none;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ECF0F5;
    border-radius: 15px;
    margin-bottom: 15px;
    padding: 10px;
    box-shadow: 2px -9px 42px -10px rgba(104,178,255,0.5);
    color: #879db2;
  }
.mobile{
    width: 80%;
    justify-content: space-between;
    align-items: center;
}

.image{
    width: 20%;
}

.car-info{
    margin: 0;
    text-align: center;
    width: 20%;
}
.car-info p{
    margin: 0 0 5px 0;
    text-align: center;
}
.car-description{
    width: 30%;
    text-align: left;
}
.description{
    color: #AEBCC9;
}
.car-order{
    display: flex;
    flex-direction: column;
}

.car-order .price {
    color: orange;
    margin-bottom: 10px;
}
.startDate{
    color: #26b2ff;
}
.finalDate {
    color: #ffca2c;
}

.btn-order{
    display: block;
    background:#EDF5FB;
    padding: 10px;
    border-radius: 5px;
    border: transparent;
    color: #0988FF;
    text-transform: uppercase;
}

.btn-order:hover{
    background:#0988FF;
    color: white;
    outline: none;
    transition: 0.4s ;
}

.model{
color: #0988FF;
}


@media (max-width:650px){
    .mobile{
    display: flex;
    flex-direction: column;
        align-items: flex-start;
    }
    .image{
        width: 40%;
    }
    .car-info,
    .car-description{
        width: 100%;
    }

    .car-info p{
        text-align: left;
    }

    .date{
        align-self: flex-end;
    }
}
</style>
