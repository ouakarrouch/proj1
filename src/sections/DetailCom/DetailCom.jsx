
import { SectionWrapper } from '../../components'
import {Button} from  '../../components/Buttons/Buttons'
import Cont from '../../components/cont/Cont'
import React from 'react'
import './DetailCom.css'
import { DetailInf, SecondaryButton } from '../../components'
import { FaDownload, FaGamepad, FaServer, FaStar } from 'react-icons/fa'
import DetailData from '../../Data/DetailData'


const DataDetails = DetailData[0];
const DetailCom = ({title,category, rate, download, images_detail, storage, status, bio}) => {
  return (
   <>
   <div className="content">
                  <div className="row">
                    <div className="col-lg-6">
                      
                        <DetailInf>
                            <div className="DetailsInfoleft">
                                <h4>{title}</h4>
                                <span>{category}</span>
                            </div>
                            <ul className='icons'>
                            <li><FaStar color='yellow' /> {rate}</li>
                            <li><FaDownload color='#ec6090' /> {download}</li>
                            </ul>
                        </DetailInf>
                        
                    </div>
                    <div className="col-lg-6">
                        <DetailInf>
                            <ul className='dataicons'>
                            <li> <FaStar color='yellow'/>{rate}</li>
                            <li> <FaDownload color='#ec6090'/> {download}</li>
                            <li> <FaServer color='#ec6090'/> {storage}</li>
                            <li> <FaGamepad color='#ec6090'/> {status}</li>
                            </ul>
                        </DetailInf>
                    </div>

                    <div className="col-lg-4 image_detail">
                      <img src={images_detail[0]} alt="iamge1"  />
                    </div>
                    <div className="col-lg-4 image_detail">
                      <img src={images_detail[1]} alt="image2" />
                    </div>
                    <div className="col-lg-4 image_detail">
                      <img src={images_detail[2]} alt="image3"  />
                    </div>
                    <div className="col-lg-12 text-details">
                      <p>{bio}</p>
                    </div>
                    <div className="col-lg-12">
                    <SecondaryButton className="button-details">
                            Download {title} Now!
                        </SecondaryButton>
   
                    </div>
                  </div>
                </div>
                
   </>
  )
}

export default DetailCom
