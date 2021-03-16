export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '60506093f51df5730986600c',
                  title: 'Sanity Studio',
                  name: 'ruairimcn-blog-studio',
                  apiId: '9a356145-365e-4320-9501-91cdf4314e47'
                },
                {
                  buildHookId: '60506093332d776a1f92f353',
                  title: 'Blog Website',
                  name: 'ruairimcn-blog',
                  apiId: '797478f1-4dd0-4c6a-be73-ded57f468873'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RuairiMcNicholas/ruairimcn-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://ruairimcn-blog.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
