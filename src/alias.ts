import moduleAlias from 'module-alias'
import path from 'path'

moduleAlias.addAliases({
  '@src': __dirname,
  '@db': path.join(__dirname, '..', 'prisma'),
})
