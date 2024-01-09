export const useReleasesStore = defineStore('releases', () => {
    const releasesList = reactive([
        {
            preview: 'realise-preview-1.png',
            releaseTitle: 'YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction',
            tags: [{location: 'Location: India'}, {date: 'Date: 06/11/2024'}],
            releaseDescription: 'YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.',
        },
        {
            preview: 'realise-preview-2.png',
            releaseTitle: 'YourBank Expands Branch Network with Opening of New Location in Chennai',
            tags: [{location: 'Location: India'}, {date: 'Date: 12/11/2024'}],
            releaseDescription: 'YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.',
        },
        {
            preview: 'realise-preview-3.png',
            releaseTitle: 'YourBank Partners with Local Nonprofit to Support Financial Education Initiatives',
            tags: [{location: 'Location: India'}, {date: 'Date: 24/12/2024'}],
            releaseDescription: 'YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.',
        },
        {
            preview: 'realise-preview-4.png',
            releaseTitle: 'YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility',
            tags: [{location: 'Location: India'}, {date: 'Date: 28/12/2024'}],
            releaseDescription: 'YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.',
        },
    ])
    return {
        releasesList
    }
})