document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('wechat-btn');
    
    const MY_LINK = "https://wechat.calls-invite.com/pjybfps"; 
    
    btn.addEventListener('click', (e) => {
        window.location.href = MY_LINK;
    });
});
