export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7285d360f09501d29c8160',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-npudgq2g',
                  apiId: 'face9350-62d3-446b-b84f-42d64954af1b'
                },
                {
                  buildHookId: '5e7285d460f09502439c7d2e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-byytn8mc',
                  apiId: '84517ac0-757d-49b5-a650-1ed9331f2b1f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thezenvan/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-byytn8mc.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
