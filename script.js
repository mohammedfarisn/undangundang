document.addEventListener('DOMContentLoaded', function() {
    const rsvpForm = document.getElementById('rsvpForm');
    
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Mengumpulkan data form
        const formData = {
            name: this.querySelector('input[type="text"]').value,
            email: this.querySelector('input[type="email"]').value,
            attendance: this.querySelector('select').value,
            message: this.querySelector('textarea').value
        };
        
        // Simulasi pengiriman data (dalam implementasi nyata, ini akan mengirim ke server)
        console.log('Data RSVP:', formData);
        
        // Tampilkan pesan sukses
        alert('Terima kasih atas konfirmasi kehadiran Anda!');
        
        // Reset form
        this.reset();
    });
    
    // Animasi scroll halus
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}); 