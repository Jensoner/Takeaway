<template>
    <div class="skeleton-container">
      <van-card >
        <template #title >
          <div class="skeleton-title"></div>
        </template>
        <template #thumb>
          <div class="skeleton-thumb"></div>
        </template>
        <template #footer>
          <div class="skeleton-footer">
            <van-tag class="skeleton-tag" />
            <van-tag class="skeleton-tag" />
            <van-tag class="skeleton-tag" />
          </div>
        </template>
      </van-card>
    </div>
  </template>
  
  <style>
  .skeleton-container {
    margin: 10px;
  }
  
  .skeleton-title {
    width: 80%;
    height: 20px;
    background-color: #f2f3f5;
  }
  
  .skeleton-thumb {
    width: 100%;
    height: 200px;
    background-color: #f2f3f5;
  }
  
  .skeleton-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
  }
  
  .skeleton-tag {
    width: 30%;
    height: 16px;
    background-color: #f2f3f5;
  }
  </style>
  