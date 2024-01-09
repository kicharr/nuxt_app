export const useOpeningStore = defineStore('openingStore', () => {
    const jobList = reactive([
        {
            id: 1,
            jobTitle: 'Relationship Manager',
            tags: [
                {location: 'Location: India'},
                {department: 'Department: Retail Banking'}
            ],
            jobDescription: 'As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.',
            qualifications: [
                'Bachelor\'s degree in Business, Finance, or a related field',
                'Minimum of 3 years of experience in sales or relationship management in the banking industry',
                'Proven track record of meeting and exceeding sales targets',
                'Excellent interpersonal and negotiation skills',
                'Strong knowledge of banking products and services'
            ]
        },
        {
            id: 2,
            jobTitle: 'Risk Analyst',
            tags: [
                {location: 'Location: India'},
                {department: 'Department:Risk Management'}
            ],
            jobDescription: 'As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.',
            qualifications: [
                'Bachelor\'s degree in Business, Finance, or a related field',
                'Minimum of 3 years of experience in sales or relationship management in the banking industry',
                'Proven track record of meeting and exceeding sales targets',
                'Excellent interpersonal and negotiation skills',
                'Strong knowledge of banking products and services'
            ]
        },
        {
            id: 3,
            jobTitle: 'IT Security Specialist',
            tags: [
                {location: 'Location: India'},
                {department: 'Department: Information Technology'}
            ],
            jobDescription: 'As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.',
            qualifications: [
                'Bachelor\'s degree in Business, Finance, or a related field',
                'Minimum of 3 years of experience in sales or relationship management in the banking industry',
                'Proven track record of meeting and exceeding sales targets',
                'Excellent interpersonal and negotiation skills',
                'Strong knowledge of banking products and services'
            ]
        },
    ])
    return {
        jobList
    }
})