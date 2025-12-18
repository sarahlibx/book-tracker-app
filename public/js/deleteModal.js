// public/js/deleteModal.js for deleting books

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('deleteModal');
  if (!modal) return; 

  const closeBtn = modal.querySelector('.close-btn');
  const cancelBtn = modal.querySelector('.cancel-btn');
  const deleteForm = document.getElementById('deleteForm');
  const titleSpan = document.getElementById('bookTitleToDelete');

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-modal-delete-btn');
    if (!btn) return;

    const { userId, bookId, bookTitle } = btn.dataset;

    titleSpan.textContent = bookTitle;
    deleteForm.action = `/users/${userId}/books/${bookId}?_method=DELETE`;

    modal.style.display = 'block';
  });

  closeBtn?.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  cancelBtn?.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
