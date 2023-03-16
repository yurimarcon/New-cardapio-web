<script setup>

</script>

<template>
    <footer class="text-light">
        <div class="d-flex flex-column align-center">
            <div>
                <strong>BrigadeirIsa</strong>
            </div>
            <div>
                Contato: (11) 95846-2469
            </div>
            <div>
                Endereço: Rua Silveira Martins, 341 - Santa Terezinha / Santo André
            </div>
            <div>Design in {{ new Date().getFullYear() }}</div>
        </div> 
    </footer>
</template>

<style scoped>
footer{
    background-color: #607d8b;
    color:azure;
    /* position: fixed; */
    bottom: 0;
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
    height: 180px;
    font-size: .9rem;
    font-weight: 400;
}
footer div{
    padding: 8px;
}
</style>