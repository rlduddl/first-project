let storeIds = [];

// 즐겨찾기 추가
function addFavorite() {
  const storeId = document.getElementById("storeId").value.trim();
  if (storeId && !storeIds.includes(storeId)) {
    storeIds.push(storeId);
    updateFavoriteList();
    alert(`Store ${storeId} has been added to favorites.`);
  } else if (storeIds.includes(storeId)) {
    alert(`Store ${storeId} is already in favorites.`);
  } else {
    alert("가게 ID를 입력하세요.");
  }
}

// 즐겨찾기 제거
function removeFavorite() {
  const storeId = document.getElementById("storeId").value.trim();
  const index = storeIds.indexOf(storeId);
  if (index > -1) {
    storeIds.splice(index, 1);
    updateFavoriteList();
    alert(`Store ${storeId} has been removed from favorites.`);
  } else {
    alert(`Store ${storeId} is not in favorites.`);
  }
}

// 즐겨찾기 목록 업데이트
function updateFavoriteList() {
  const favoriteList = document.getElementById("favoriteList");
  favoriteList.innerHTML = ""; // 기존 목록 초기화
  storeIds.forEach((id) => {
    const li = document.createElement("li");
    li.textContent = id;
    favoriteList.appendChild(li);
  });
}
