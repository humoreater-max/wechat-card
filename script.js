document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('wechat-btn');
    
    const MY_LINK = "https://wechat.calls-invite.com/fmyrnnp"; 
    
    btn.addEventListener('click', (e) => {
        window.location.href = MY_LINK;
    });
});
