const input = document.getElementById('friend-input');
const addBtn = document.getElementById('add-friend');
const friendsList = document.getElementById('friends-list');

addBtn.addEventListener('click', () => {
  const name = input.value.trim();
  if (name) {
    const li = document.createElement('li');
    li.innerHTML = `<span class="node">${name}</span>`;
    friendsList.appendChild(li);
    input.value = "";
  }
});
