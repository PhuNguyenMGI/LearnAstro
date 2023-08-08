<script type="module" lang="ts">
  import { isOpenModal } from './../store/sampleStore';

  const toggleModal = () => {
    isOpenModal.set(!$isOpenModal);
  }
</script>

<header
  class="h-[72px] flex items-center w-full sticky top-0 z-[1] bg-[#ccc] mb-5"
>
  <ul class="flex gap-6 mx-5 w-full">
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/blogs">Blogs</a>
    </li>
    <li>
      <a href="/about">About</a>
    </li>
    <li class="ml-auto">
		  <button on:click={toggleModal} class="text-[#333]">Open store modal</button>
	  </li>
    <li>
		  <a href="/admin">Admin</a>
	  </li>
  </ul>
</header>

<style>
  li a {
    @apply text-[#333];
  }
</style>