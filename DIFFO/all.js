function filterProducts() {
    // Get selected values from each dropdown
    const brandFilter = document.getElementById("sort-price").value;
    const seasonFilter = document.getElementById("season-sale").value;
    const typeFilter = document.getElementById("product-type").value;

    // Get all products
    const products = document.querySelectorAll(".product");

    // Loop through each product and display/hide based on filters
    products.forEach((product) => {
        // Get product attributes
        const brand = product.getAttribute("data-brand");
        const type = product.getAttribute("data-type");
        const season = product.getAttribute("data-season") || ""; // Default to empty string if missing

        // Check if the product matches the filters
        const matchesBrand = !brandFilter || brand === brandFilter;
        const matchesType = !typeFilter || type === typeFilter;
        const matchesSeason = !seasonFilter || season === seasonFilter;

        // Display the product if it matches all selected filters
        product.style.display = (matchesBrand && matchesType && matchesSeason) ? "block" : "none";
    });
}

// Optional: Initialize with all products visible on page load
document.addEventListener("DOMContentLoaded", () => {
    filterProducts(); // Call to show all products initially
});
