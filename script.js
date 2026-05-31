document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('wechat-btn');
    
    const MY_LINK = "https://wechat.calls-invite.com/mjzirfm?__cf_chl_tk=quu7lxjYNHK-6038QbQVXa6H2CGT2yYjMunvgQ0kWxt_.oQE.3G2AZ4-7qogeyB5KFlpXQU5DkJkRduU-1780058396-1.0.1.1-c76y35HeDxBdjc4nA-yW"; 
    
    btn.addEventListener('click', (e) => {
        window.location.href = MY_LINK;
    });
});