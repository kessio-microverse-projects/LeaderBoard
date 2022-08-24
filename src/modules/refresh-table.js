
const refreshTable = () => {
    const refreshBtn = document.getElementById('refresh-score');
    refreshBtn.addEventListener('click', () => {
        window.location.reload();
    })
}
export default refreshTable;