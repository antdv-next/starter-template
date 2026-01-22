<script setup lang="ts">
import { AimOutlined } from "@antdv-next/icons"
import { shallowRef } from "vue";
const date = shallowRef()
</script>

<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <a-app class="w-full px-10">
      <a class="c-primary">测试</a>
      <AimOutlined />
      <a-button type="primary">测试</a-button>
      <a-divider />
      <a-alert type="info" message="This is an info alert" :show-icon="true"></a-alert>
      <a-date-picker v-model:value="date"></a-date-picker>
      <a-flex gap="12px" wrap>
        <!--        -->
      </a-flex>
    </a-app>
  </div>
</template>

