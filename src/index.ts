// @ts-expect-error
import FtpDeploy from 'ftp-deploy';
const ftpDeploy = new FtpDeploy();

hexo.extend.deployer.register('ftp-deploy-kx', args => {
  if (!args.host || !args.user || (args.password ?? '') === '') {
    const help = [
      'You should argsure deployment settings in _config.yml first!',
      '',
      'Example:',
      '  deploy:',
      '    type: ftp-deploy-kx',
      '    host: <host>',
      '    port: [port] # Default is 21',
      '    remoteRoot: [remote] # Default is `/`',
      '    user: <user>',
      '    password: <pass>',
      '    exclude: [exclude]',
      '    include: [include]',
      '    deleteRemote: [true|false] # delete ALL existing files at destination before uploading, if true',
      '    forcePasv: [true|false] # Passive mode is forced (EPSV command is not sent)',
      '    sftp: [true|false] # use sftp or ftp',
      ''
    ];

    return console.log(help.join('\n'));
  }

  const config = {
    user: args.user,
    // Password optional, prompted if none given
    password: args.password,
    host: args.host,
    port: args.port ?? 21,
    localRoot: hexo.public_dir,
    remoteRoot: args.remoteRoot ?? '/',
    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: args.include ?? ['*', '**/*'],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: args.exclude ?? [],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: args.deleteRemote ?? false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: args.forcePasv ?? false,
    // use sftp or ftp
    sftp: args.sftp ?? false
  };

  ftpDeploy
    .deploy(config)
    .then((res: any) => console.log('finished:', res))
    .catch((err: any) => console.log(err));
});
