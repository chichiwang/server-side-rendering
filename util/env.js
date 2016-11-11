function isGlobalScope(env) {
  return new Function(`try {return this===${env};}catch(e){ return false;}`);
}

export const env = {
  browser: isGlobalScope('window')(),
  node: isGlobalScope('global')(),
}

export default env.browser ? 'browser' : 'node';
