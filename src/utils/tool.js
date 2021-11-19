import JSEncrypt from 'jsencrypt'
/**
 * 产生随机数
 * @param {*数字} n
 * @returns 随机数
 */
const rndNum = (n) => {
  var res = ''
  for (var i = 0; i < n; i++) {
    res += Math.floor(Math.random() * 10)
  }
  return res
}

/**
 * 加密方法
 * @param {String} 待加密的密码
 */
const PUBLIC_KEY =
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCK0TPbpm5JOh4itd2OxlaZqAIauRD/RHXgdPt3e2/pHzEt0Rixuux9FwwhnmiRYasjkliSJDPmgNeHJ5lkm7USkHmHYA8iGtkPGb1A60OTEnzTla28zrCkPmE5mp3UnPA7FRSEdJh0OgweRB/3ne2lJ5fUjBfyVN0w0+nT1dmf8wIDAQAB'
const encrypt = (data) => {
  if (!data) return false
  let encryptor = new JSEncrypt() // 新建JSEncrypt对象
  encryptor.setPublicKey(PUBLIC_KEY) // 设置公钥
  const rsaDta = encryptor.encrypt(data) // 进行加密
  return rsaDta
}

// 菜单树
const getMenuTree = (data) => {
  // 删除 所有 children,以防止多次调用
  data.forEach(function (item) {
    delete item.children
  })
  // 将数据存储为 以 id 为 KEY 的 map 索引数据列
  var map = {}
  data.forEach(function (item) {
    // 在该方法中可以给每个元素增加其他属性
    item.label = item.authna
    item.value = item.authcd
    map[item.authcd] = item
  })
  // console.log(map);
  var val = []
  data.forEach(function (item) {
    // 以当前遍历项，的pid,去map对象中找到索引的id
    var parent = map[item.partah]
    if (parent) {
      // 可以给每个父节点添加属性
      parent.iconCls = 'i-folder'
      //  添加到父节点的子节点属性中
      ;(parent.children || (parent.children = [])).push(item)
    } else {
      //如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
      val.push(item)
    }
  })
  return val
}

export { rndNum, encrypt, getMenuTree }
