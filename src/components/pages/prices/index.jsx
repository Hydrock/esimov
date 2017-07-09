import React, { Component } from 'react'
import Title from '@src/components/common/title'
import style from './style.scss'

export default class Prices extends Component {
  render() {
    return (
      <div className={style.conatainer}>
        <Title text={'прайс'}/>
        <table className={style.table}>
          <tbody>
            <tr>
              <th className={style.tableTD}>
                Услуга
              </th>
              <th className={style.tableTD}>
                Цена
              </th>
            </tr>
            <tr>
              <td className={style.tableTD}>
                бла бла бла
              </td>
              <td className={style.tableTD}>
                10000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}