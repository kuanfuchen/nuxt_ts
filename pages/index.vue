<template>
  <div>
    <h1>這是首頁</h1>
    <div class="">
      <NuxtLink to="/about">about</NuxtLink>
    </div>
    <div class="">
      <NuxtLink to="/homeView">homeview</NuxtLink>
    </div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="showModal">
      Launch demo modal
    </button>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" 
    ref="modalRef">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close btn btn-danger" data-bs-dismiss="modal" aria-label="Close">x</button>
          </div>
          <div class="modal-body">
            123456
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    
    
  </div>
</template>
<script setup>
  // import { ref, onMounted } from 'vue';
  const { $bootstrap }  = useNuxtApp();
  const modalRef = ref(null);
  let modal;
  const showModal = () => {
    modal.show();
  }
  onMounted(() => {
    modal = $bootstrap.modal(modalRef.value);
  })
</script>