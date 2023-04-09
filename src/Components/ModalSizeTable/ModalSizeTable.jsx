import React from 'react'
import './ModalSizeTable.scss'
import closeIcon from '../../Resurces/Img/closeIcon.svg'
function ModalSizeTable({ modalState, setModalState }) {
	return (
		<div className={modalState ? 'ModalSize active' : 'ModalSize'} onClick={() => setModalState(false)}>
			<div className="ModalSize__container" onClick={(e) => e.stopPropagation()}>
				<div className="ModalSize__header">
					<div className="ModalSize__header--title">
						<h1 className='ModalSize__title--style'>Таблица размеров</h1>
					</div>
					<div className="ModalSize__header--close">
						<button className='ModalSize__close--btn' onClick={() => setModalState(false)}>
							<span></span>
						</button>
					</div>
				</div>
				<div className="ModalSize__content">
					<table className='ModalSize__table' >
						<thead className='ModalSize__thead'>
							<tr className='ModalSize__thead--tr'>
								<th className='ModalSize__thead--td'>Российский размер</th>
								<th className='ModalSize__thead--td'>Размер производителя</th>
								<th className='ModalSize__thead--td'>Обхват головы, в см</th>
								<th className='ModalSize__thead--td'>Обхват шеи, в см</th>
								<th className='ModalSize__thead--td'>Обхват груди, в см</th>
								<th className='ModalSize__thead--td'>Обхват талии, в см</th>
								<th className='ModalSize__thead--td'>Обхват бедер, в см</th>
							</tr>
						</thead>
					</table>
					<div className="ModalSize__table--scroll">
						<table className='ModalSize__table'>
							<tbody className='ModalSize__tbody'>
								<tr className='ModalSize__tbody--subtitle'>
									<td colspan="7" className='ModalSize__subtitle--style'>Мужская сетка</td>
								</tr>
								<tr className='ModalSize__tbody--tr'>
									<td className='ModalSize__tbody--td'>46</td>
									<td className='ModalSize__tbody--td'>XS</td>
									<td className='ModalSize__tbody--td'>-</td>
									<td className='ModalSize__tbody--td'>-</td>
									<td className='ModalSize__tbody--td'>92</td>
									<td className='ModalSize__tbody--td'>76</td>
									<td className='ModalSize__tbody--td'>96</td>
								</tr>
								<tr className='ModalSize__tbody--tr'>
									<td className='ModalSize__tbody--td'>48</td>
									<td className='ModalSize__tbody--td'>X</td>
									<td className='ModalSize__tbody--td'>-</td>
									<td className='ModalSize__tbody--td'>-</td>
									<td className='ModalSize__tbody--td'>96</td>
									<td className='ModalSize__tbody--td'>82</td>
									<td className='ModalSize__tbody--td'>100</td>
								</tr>
								<tr className='ModalSize__tbody--tr'>
									<td className='ModalSize__tbody--td'>50</td>
									<td className='ModalSize__tbody--td'>M</td>
									<td className='ModalSize__tbody--td'>-</td>
									<td className='ModalSize__tbody--td'>-</td>
									<td className='ModalSize__tbody--td'>100</td>
									<td className='ModalSize__tbody--td'>88</td>
									<td className='ModalSize__tbody--td'>104</td>
								</tr>
								<tr className='ModalSize__tbody--tr'>
									<td className='ModalSize__tbody--td'>52</td>
									<td className='ModalSize__tbody--td'>L</td>
									<td className='ModalSize__tbody--td'>-</td>
									<td className='ModalSize__tbody--td'>-</td>
									<td className='ModalSize__tbody--td'>100</td>
									<td className='ModalSize__tbody--td'>94</td>
									<td className='ModalSize__tbody--td'>108</td>
								</tr>
								<tr className='ModalSize__tbody--tr'>
									<td className='ModalSize__tbody--td'>54</td>
									<td className='ModalSize__tbody--td'>XL</td>
									<td className='ModalSize__tbody--td'>-</td>
									<td className='ModalSize__tbody--td'>-</td>
									<td className='ModalSize__tbody--td'>104</td>
									<td className='ModalSize__tbody--td'>100</td>
									<td className='ModalSize__tbody--td'>112</td>
								</tr>
								<tr className='ModalSize__tbody--tr'>
									<td className='ModalSize__tbody--td'>56</td>
									<td className='ModalSize__tbody--td'>XXL</td>
									<td className='ModalSize__tbody--td'>-</td>
									<td className='ModalSize__tbody--td'>-</td>
									<td className='ModalSize__tbody--td'>112</td>
									<td className='ModalSize__tbody--td'>106</td>
									<td className='ModalSize__tbody--td'>116</td>
								</tr>
							</tbody>
						</table>
						<table className='ModalSize__table'>
							<tbody className='ModalSize__tbody'>
								<tr className='ModalSize__tbody--subtitle'>
									<td colspan="7" className='ModalSize__subtitle--style'>Женская сетка</td>
								</tr>
								<tr className='ModalSize__tbody--tr'>
									<td className='ModalSize__tbody--td'>40</td>
									<td className='ModalSize__tbody--td'>XS</td>
									<td className='ModalSize__tbody--td'>-</td>
									<td className='ModalSize__tbody--td'>-</td>
									<td className='ModalSize__tbody--td'>80</td>
									<td className='ModalSize__tbody--td'>62</td>
									<td className='ModalSize__tbody--td'>86</td>
								</tr>
								<tr className='ModalSize__tbody--tr'>
									<td className='ModalSize__tbody--td'>42</td>
									<td className='ModalSize__tbody--td'>X</td>
									<td className='ModalSize__tbody--td'>-</td>
									<td className='ModalSize__tbody--td'>-</td>
									<td className='ModalSize__tbody--td'>84</td>
									<td className='ModalSize__tbody--td'>66</td>
									<td className='ModalSize__tbody--td'>92</td>
								</tr>
								<tr className='ModalSize__tbody--tr'>
									<td className='ModalSize__tbody--td'>44 - 46</td>
									<td className='ModalSize__tbody--td'>M</td>
									<td className='ModalSize__tbody--td'>-</td>
									<td className='ModalSize__tbody--td'>-</td>
									<td className='ModalSize__tbody--td'>88 - 92</td>
									<td className='ModalSize__tbody--td'>70 - 74</td>
									<td className='ModalSize__tbody--td'>96 - 100</td>
								</tr>
								<tr className='ModalSize__tbody--tr'>
									<td className='ModalSize__tbody--td'>48 - 50</td>
									<td className='ModalSize__tbody--td'>L</td>
									<td className='ModalSize__tbody--td'>-</td>
									<td className='ModalSize__tbody--td'>-</td>
									<td className='ModalSize__tbody--td'>96</td>
									<td className='ModalSize__tbody--td'>78 - 82</td>
									<td className='ModalSize__tbody--td'>104 - 108</td>
								</tr>
								<tr className='ModalSize__tbody--tr'>
									<td className='ModalSize__tbody--td'>52</td>
									<td className='ModalSize__tbody--td'>XL</td>
									<td className='ModalSize__tbody--td'>-</td>
									<td className='ModalSize__tbody--td'>-</td>
									<td className='ModalSize__tbody--td'>104</td>
									<td className='ModalSize__tbody--td'>86</td>
									<td className='ModalSize__tbody--td'>112</td>
								</tr>
								<tr className='ModalSize__tbody--tr'>
									<td className='ModalSize__tbody--td'>54 - 56</td>
									<td className='ModalSize__tbody--td'>XXL</td>
									<td className='ModalSize__tbody--td'>-</td>
									<td className='ModalSize__tbody--td'>-</td>
									<td className='ModalSize__tbody--td'>108 - 112</td>
									<td className='ModalSize__tbody--td'>90 - 94</td>
									<td className='ModalSize__tbody--td'>116 - 120</td>
								</tr>
							</tbody>
						</table>
					</div>

				</div>
			</div>
		</div>
	)
}

export default ModalSizeTable
