import React, { Component } from 'react'
import Nav from '../components/nav';
import {
    Row,
    Col,
    Card,
    CardBody,
    Form,
    FormGroup,
    Input,
    Label,
    CustomInput
} from 'reactstrap';
import {connect} from 'react-redux'
import {withRouter} from 'next/router'
import {
    SetPreviewData,
    UpdateLayout
} from '../store/Layout/actions';

class UpdateLayoutClass extends Component {
    state={
        logo: null,
        logoStyle: null,
        title: null,
        titleColor: null,
        titleBgColor: null,
        slides: []
    }
    componentDidMount(){
        //clear preview data
        if(this.props.preview.isPreview){
            this.setState({
                ...this.props.preview
            })
        }

    }
    /**
     *
     */
    appendToFormData = (allDataGroup) =>{
        let FD = new FormData()
        //add id
        const {_id:id} = this.props.layout;
        //reload to get id form DB
        if(!id){
            window.location.href = '/'
        }

        FD.append('id', id)

        Object.keys(allDataGroup).map(async (key, index) => {
            //append all data to Form data [used when we uploads files with data]
            if (key === "slides") {
                allDataGroup[key].map(async(single, idx) => {
                    await FD.append(key, single.file);
                })

            } else if(key === "logo") {
                await FD.append(key, allDataGroup[key].file)
            }else{
                await FD.append(key, allDataGroup[key])
            }
        });

        return FD
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.setState({
            loading: true
        })
        //handle data before submit
        /**
         * validate
         *  we should validate length and files choosed
         * but there's no time for now
         */
        const {
            logo,
            logoStyle,
            title,
            titleColor,
            titleBgColor,
            slides
        } = this.state;
        if(
            logo &&
            logoStyle &&
            title &&
            titleColor &&
            titleBgColor &&
            Array.isArray(slides)
        ){
            this.props.UpdateLayout(this.appendToFormData(this.state))
            .then(()=>{
                this.setState({
                    loading: false
                })
            })
            .catch(()=>{
                this.setState({
                    loading: false
                })
            });
        }else{
            alert("Please check all fields")
            this.setState({
                loading: false
            })
        }
    }
    /**
     *
     */
    handlePreviewClick = async(e) =>{
        await this.props.SetPreviewData(this.state);
        this.props.router.push('/preview')
    }

    handleInputsChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handelFilesChange = async (e,type) =>{
        let {slides} = this.state;
        if(e.target.files&&e.target.files[0]){
            let slidesReader = new FileReader();
            let logoReader = new FileReader();
            let file = e.target.files[0];
            if(type === 'slider'){
                //flter
                let isSelected =  slides.find(v=> v.file.name === file.name)
                if(!isSelected){
                    slidesReader.onload = (loaded)=>{
                        this.setState({
                            slides: [...this.state.slides,{
                                file: file,
                                src: loaded.target.result,
                                altText: file.name
                            }]
                        })
                    }
                    slidesReader.readAsDataURL(file);
                }
            }else{
                logoReader.onload = (loaded)=>{
                    this.setState({
                        logo: {
                            file: file,
                            src: loaded.target.result
                        }
                    })
                }
                logoReader.readAsDataURL(file);
            }
        }
    }
    render() {
        const {
            logoStyle,
            title,
            titleColor,
            titleBgColor
        } = this.state;
        return (
            <>
                <Nav
                    handlePreviewClick={this.handlePreviewClick}
                />
                <Row className="justify-content-center">
                    <Col md="8" lg="6" xl="5">
                        <Card className="bg-pattern shadow-none">
                            <CardBody>
                                <div className="p-3">
                                <h4 className="font-18 text-center"> Update Layout </h4>
                                    <Form className="form-horizontal" onSubmit={this.handleSubmit}>

                                        <FormGroup>
                                            <Label for="Title">Title</Label>
                                            <Input type="text" name="title" id="Title" placeholder="Title"
                                                onChange={this.handleInputsChange}
                                                value={title}
                                            />
                                        </FormGroup>

                                        <FormGroup>
                                            <Label for="title-color">Title Color</Label>
                                            <Input type="color" name="titleColor" id="title-color"
                                                onChange={this.handleInputsChange}
                                                value={titleColor}
                                            />
                                        </FormGroup>

                                        <FormGroup>
                                            <Label for="title-background-color">Title Background Color</Label>
                                            <Input type="color" name="titleBgColor" id="title-background-color"
                                                onChange={this.handleInputsChange}
                                                value={titleBgColor}
                                            />
                                        </FormGroup>

                                        <FormGroup className="upload-btn">
                                            <Label for="logo" className="btn btn-secondary">Upload Logo</Label>
                                            <Input
                                                type="file"
                                                accept="image/*"
                                                name="logo"
                                                id="logo"
                                                onChange={this.handelFilesChange}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleCheckbox">Logo Style</Label>
                                            <div>
                                                <CustomInput
                                                    type="radio"
                                                    id="square"
                                                    name="logoStyle"
                                                    label="Square"
                                                    onChange={this.handleInputsChange}
                                                    value="square"
                                                />
                                                <CustomInput
                                                    type="radio"
                                                    id="flexible"
                                                    name="logoStyle"
                                                    label="flexible Width"
                                                    onChange={this.handleInputsChange}
                                                    value="flexible"
                                                />
                                                <CustomInput
                                                    type="radio"
                                                    id="rounded"
                                                    name="logoStyle"
                                                    label="Rounded"
                                                    onChange={this.handleInputsChange}
                                                    value="rounded"
                                                />
                                            </div>
                                        </FormGroup>
                                        <Row>
                                            {this.state.logo&&
                                                <Col md='3' className="m-1" >
                                                    <img className="preview" src={this.state.logo.src} alt=""/>
                                                </Col>
                                            }
                                        </Row>
                                        <FormGroup className="upload-btn mt-4">
                                            <Label for="slides" className="btn btn-secondary">+ Add Slider Image</Label>
                                            <Input
                                                type="file"
                                                accept="image/*"
                                                name="slides"
                                                id="slides"
                                                onChange={(e)=>this.handelFilesChange(e,"slider")}
                                            />
                                        </FormGroup>
                                        <Row>
                                            {this.state.slides?
                                                this.state.slides.map((file,idx)=>
                                                    <Col md='3' className="m-1" key={idx}>
                                                        <img className="preview" src={file.src} alt=""/>
                                                    </Col>
                                                ): null
                                            }
                                        </Row>
                                        <div className="mt-3">
                                            <button className="btn btn-primary btn-block waves-effect waves-light" type="submit">
                                                Update
                                            </button>
                                        </div>
                                        <style jsx>
                                            {`
                                                .preview{
                                                    width: 150px;
                                                    height: 130px;
                                                }
                                            `}
                                        </style>
                                    </Form>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
            </Row>
            </>
        )
    }
}

const mapStateToProps = (state) =>({
    preview: state.Layout.preview,
    layout: state.Layout
})
export default withRouter(connect(mapStateToProps,{SetPreviewData ,UpdateLayout})(UpdateLayoutClass))