<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>My Darlyn</span>
    </div>

    <ChatMessages :messages="messages" />
    <MessageBox @send-message="onMessage" />
    
  </div>
</template>

<script setup lang="ts">

import { useChat } from '@/compables/useChat';
import MessageBox from '../components/chat/MessageBox.vue';
import ChatMessages from '@/components/chat/ChatMessages.vue';


const {messages, onMessage} = useChat ();



</script>
