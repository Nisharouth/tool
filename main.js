// Main JavaScript File

// Load Header and Footer
document.addEventListener('DOMContentLoaded', function() {
    // Load Header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));

    // Load Footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});

// Search Functionality
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const toolCards = document.querySelectorAll('.tool-card');
        
        toolCards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const description = card.querySelector('.card-text').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Tool Categories Data
const toolCategories = {
    imageTools: {
        title: 'Image Tools',
        tools: [
            { name: 'Image to PNG Converter', description: 'Convert images to PNG format', path: '/tools/image-tools/image-to-png.html' },
            { name: 'Image to JPG Converter', description: 'Convert images to JPG format', path: '/tools/image-tools/image-to-jpg.html' },
            { name: 'Image Resizer', description: 'Resize images while maintaining aspect ratio', path: '/tools/image-tools/image-resizer.html' }
        ]
    },
    seoTools: {
        title: 'SEO Tools',
        tools: [
            { name: 'Meta Tag Generator', description: 'Generate SEO-friendly meta tags', path: '/tools/seo-tools/meta-tag-generator.html' },
            { name: 'Keyword Density Checker', description: 'Analyze keyword density in your content', path: '/tools/seo-tools/keyword-density.html' },
            { name: 'Sitemap Generator', description: 'Generate XML sitemaps for your website', path: '/tools/seo-tools/sitemap-generator.html' }
        ]
    }
    // Add more categories as needed
};

// Utility Functions
const utils = {
    // Format file size
    formatFileSize: function(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    },

    // Show loading spinner
    showSpinner: function(element) {
        const spinner = document.createElement('div');
        spinner.className = 'spinner';
        element.appendChild(spinner);
    },

    // Hide loading spinner
    hideSpinner: function(element) {
        const spinner = element.querySelector('.spinner');
        if (spinner) {
            spinner.remove();
        }
    },

    // Show error message
    showError: function(element, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'alert alert-danger';
        errorDiv.textContent = message;
        element.appendChild(errorDiv);
    },

    // Clear error message
    clearError: function(element) {
        const errorDiv = element.querySelector('.alert-danger');
        if (errorDiv) {
            errorDiv.remove();
        }
    }
};

// Export utilities for use in other files
window.utils = utils; 