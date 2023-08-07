<script>
  import { createEventDispatcher } from "svelte";
  import { isOpenModal } from "../store/sampleStore";

  const dispatch = createEventDispatcher();

  function toggleModal() {
    isOpenModal.set(!$isOpenModal);
  }

  function handleBackdropClick(event) {
    if ($isOpenModal && event.target === event.currentTarget) {
      toggleModal();
    }
  }
</script>

{#if $isOpenModal}
  <div class="modal" on:click={handleBackdropClick}>
    <div class="content">
      <!-- Modal content here -->
      <slot />
    </div>
  </div>
{/if}

<button on:click={toggleModal}>Open Modal</button>

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .content {
    background-color: white;
    padding: 1rem;
    border-radius: 4px;
  }
</style>
